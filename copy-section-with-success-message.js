document.addEventListener('DOMContentLoaded', () => {
// rename the copy link class
const copyLinks = document.querySelectorAll('.copy-link-class');
copyLinks.forEach(copyLink => {
copyLink.addEventListener('click', (event) => {
event.preventDefault();
// change this to match your own needs
const section = copyLink.closest('section') || copyLink.closest('.section');
const copyMessage = section.querySelector('.success-copy-message');
const processNode = (node) => {
if (node.nodeType === Node.TEXT_NODE) {
return node.textContent;
}
if (node.nodeType !== Node.ELEMENT_NODE) {
return '';
}
if (node.tagName === 'A') {
return `${node.textContent} (${node.href})`;
}
if (node.tagName === 'DETAILS') {
let detailsContent = '';
const summary = node.querySelector('SUMMARY');
if (summary) {
detailsContent += `${summary.textContent}\n`;
}
const content = node.querySelector('SUMMARY')?.nextElementSibling;
if (content) {
detailsContent += `\n${processNode(content)}\n`;
}
return detailsContent;
}
if (
node.tagName === 'P' ||
node.tagName.match(/^H[1-6]$/i) ||
node.tagName === 'OL' ||
node.tagName === 'UL'
) {
const processedContent = Array.from(node.childNodes)
.map(child => processNode(child))
.join('');
return processedContent + '\n\n';
}
if (node.tagName === 'LI') {
const processedContent = Array.from(node.childNodes)
.map(child => processNode(child))
.join('');
return `• ${processedContent}\n`;
}
return Array.from(node.childNodes)
.map(child => processNode(child))
.join('');
};
const sectionContent = Array.from(section.childNodes)
.filter(node => node.nodeType === Node.ELEMENT_NODE && node !== copyLink && node !== copyMessage)
.map(node => processNode(node))
.join('');
navigator.clipboard.writeText(sectionContent)
.then(() => {
copyMessage.style.display = 'block';
setTimeout(() => {
copyMessage.style.display = 'none';
}, 2000);
})
.catch(() => {
// remove in production
console.log('Copy ERROR.');
});
});
});
});

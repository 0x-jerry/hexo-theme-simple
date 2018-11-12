window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

const metas = document.getElementsByTagName('meta');
const gaMeta = Array.from(metas).find((meta) => meta.name === 'ga');

gaMeta && gtag('config', gaMeta.content);

const getReportFileTitle = (url) => {
  this.url = url;
  let startSlicePos;
  if (this.url.indexOf("www.") > 0) {
    startSlicePos = this.url.indexOf("www.") + 4;
  } else {
    startSlicePos = this.url.indexOf("//") + 2;
  }
  return this.url.slice(startSlicePos);
}

module.exports = getReportFileTitle;
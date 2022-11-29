var existingUrl = "osamede";

const checkUrl = (url, append = 0) => {
  let newCheckUrl = append === 0 ? url : url + append;
  if (newCheckUrl === existingUrl) {
    //return ["match", newCheckUrl];
    return checkUrl(newCheckUrl, append + 1);
  }
  if (newCheckUrl !== existingUrl) {
    return newCheckUrl;
  }
};

console.log(checkUrl("osamede"));

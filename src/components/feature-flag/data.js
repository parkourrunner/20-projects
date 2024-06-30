
const dummyApiResponse = {
  showLightDarkMode: false,
  showTicTocToe: true,
  showRandomColor: true,
  showAccordion: false,
  showTreeView: true,
}

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(() => {
      resolve(dummyApiResponse)
    }, 1000);
    else reject("Some error. Try again!")
  })
}

export default featureFlagsDataServiceCall

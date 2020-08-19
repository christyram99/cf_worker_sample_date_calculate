addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  const html = '' +
  '<html>' +
  '<body>' +
  '<div style="font-size:36px;font-family: Helvetica, Sans-Serif;">' +
  ' <b> ' +
  getDifference() + 
  ' Days </b>' +
  '</div>' +
  '</body>' +
  '</html>'
  
  const init = {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  }

  return new Response(html, init)
}

function getDifference () {
  const previousDate = START_DATE

  const differenceInMilli = Date.now() - new Date(previousDate).getTime()
  return Math.ceil(differenceInMilli / 86400000)  
}
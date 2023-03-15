async function getResponseData(response) {
  const contentType = response.headers.get('content-type')
  // use indexOf for ie9 support
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response?.json()
  } else {
    if (response.status === 201) return { wasCreated: true }

    return { message: await response.text() }
  }
}

export const handleHTTPErrors = async function(response) {
  let data = null
  try {
    data = await getResponseData(response)
  } catch (err) {
    return {}
  }

  if (!response.ok && data.details) {
    return Promise.resolve({ message: data.details })
  }

  if (!response || !response.ok) {
    const message = `${ response.status }: ${ data.message || 'Error' }`
    /* eslint-disable prefer-promise-reject-errors */
    return Promise.reject({ message, status: response.status })
  }

  if (response.status === 204) {
    return Promise.resolve({})
  }

  return Promise.resolve(data)
}

export const fetchRest = async (path, method, body = {}, headers = {}) => {
  try {
    let config = {
      method,
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        pragma: 'no-cache',
        'cache-control': 'no-store',
        ...headers,
      },
    }
    if (method !== 'GET') {
      config.body = body ? JSON.stringify(body) : body
    }
    const response = await fetch(path, config)

    return handleHTTPErrors(response, { isJson: true })
  } catch (e) {
    throw e
  }
}

/**
  @param {String} apiUrl - url of api to use
  @returns {array} array of objects
  // TODO: Data Validation
*/
const fetchDataFromApi = (apiUrl) => {
  return new Promise((resolve, reject) => {
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var userData = {
          'infoArray': [
            {'name': 'Email address', 'value': data['email']},
            {'name': 'Phone number', 'value': data['phone']}
          ]
        }

        var companyData = {
          'infoArray': [
            {'name': 'Name', 'value': data['company']['name']},
            {'name': 'Catch phrase', 'value': data['company']['catchPhrase']}
          ],
          'links': [
            {'name': data['website'], 'value': data['website']},
            {'name': 'twitter', 'value': '/'},
            {'name': 'facebook', 'value': '/'}
          ]
        }

        let updatedData = {...data, userData, companyData}
        resolve(updatedData)
      })
      .catch(error => reject())
  })
}


export default fetchDataFromApi

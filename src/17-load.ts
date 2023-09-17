import _ from 'lodash'

const data = [
    {
        username: 'Yoselin',
        role: 'admin'
    },
    {
        username: 'Yomara',
        role: 'seller'
    },
    {
        username: 'Zulema',
        role: 'seller'
    },
    {
        username: 'Santiago',
        role: 'customer'
    }
]

const rta = _.groupBy(data,(item) => item.role)
console.log(rta)



const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function findValueByKey(obj, companyName) {
    if (obj.name === companyName) {
        return obj;
    }

    if (obj.clients && obj.clients.length > 0) {
        for (var i = 0; i < obj.clients.length; i++) {
            var result = findValueByKey(obj.clients[i], companyName);
            if (result) {
                return result;
            }
        }
    }

    if (obj.partners && obj.partners.length > 0) {
        for (var b = 0; b < obj.partners.length; b++) {
            var partnerResult = findValueByKey(obj.partners[b], companyName);
            if (partnerResult) {
                return partnerResult;
            }
        }
    }
}


var result = findValueByKey(company, 'Клієнт 1');
if (result) {
    console.log("Знайдено: ", result);
} else {
    console.log("Не знайдено");
}
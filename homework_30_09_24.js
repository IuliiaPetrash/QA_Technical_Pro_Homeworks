const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
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

const findValueByKey = (companyObj, companyName) => {
    if (companyObj.name === companyName) {
      return companyObj;
    }
  
    if (companyObj.clients) {
      for (const client of companyObj.clients) {
        const result = findValueByKey(client, companyName);
        if (result) return result;
      }
    }
  
    if (companyObj.partners) {
      for (const partner of companyObj.partners) {
        const result = findValueByKey(partner, companyName);
        if (result) return result;
      }
    }
  
    return undefined;
  };
  
  console.log(findValueByKey(company, 'Клієнт 2')); 
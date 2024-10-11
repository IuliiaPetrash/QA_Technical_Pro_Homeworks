var arr = [
    {
      userName: "Test",
      lastName: "Test",
      email: "test.test@gmail.com"
    },
    {
      userName: "Dmitro",
      lastName: "Porohov",
      email: "dmitro.porohov@yahoo.com"
    },
    {
      userName: "Andrii",
      lastName: "",
      email: "andrii@mail.ru"  
    }
  ];
  
  function filterEmail(arr) {
    let correctEmails = [];
    let re = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
  
    arr.forEach(person => {
      if (re.test(person.email)) {
        correctEmails.push(person.email);
      }
    });
  
    return correctEmails;
  }
  
  console.log(filterEmail(arr));
  
  
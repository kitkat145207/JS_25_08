/*
Từ [{ make: 'audi', model: 'r8', year: '2012' }, 
{ make: 'audi', model: 'rs5', year: '2013' }, 
{ make: 'ford', model: 'mustang', year: '2012' }, 
{ make: 'ford', model: 'fusion', year: '2015' }, 
{ make: 'kia', model: 'optima', year: '2012' }]
Trả về {
  "audi": [
    {
      "make": "audi",
      "model": "r8",
      "year": "2012"
    },
    {
      "make": "audi",
      "model": "rs5",
      "year": "2013"
    }
  ],
  "ford": [
    {
      "make": "ford",
      "model": "mustang",
      "year": "2012"
    },
    {
      "make": "ford",
      "model": "fusion",
      "year": "2015"
    }
  ],
  "kia": [
    {
      "make": "kia",
      "model": "optima",
      "year": "2012"
    }
  ]
}
*/
const cars = [
    { make: 'audi', model: 'r8', year: '2012' },
    { make: 'audi', model: 'rs5', year: '2013' },
    { make: 'ford', model: 'mustang', year: '2012' },
    { make: 'ford', model: 'fusion', year: '2015' },
    { make: 'kia', model: 'optima', year: '2012' }
];

function formatArr(arr) {
    return arr.reduce((total, curValue) => {
        if (!total[curValue.make]) {
            total[curValue.make] = [];
        }
        total[curValue.make].push(curValue);
        return total;
    }, {});
}
console.log(formatArr(cars));


/* Result:
{
  audi: [
    { make: 'audi', model: 'r8', year: '2012' },
    { make: 'audi', model: 'rs5', year: '2013' }
  ],
  ford: [
    { make: 'ford', model: 'mustang', year: '2012' },
    { make: 'ford', model: 'fusion', year: '2015' }
  ],
  kia: [ { make: 'kia', model: 'optima', year: '2012' } ]
}
*/
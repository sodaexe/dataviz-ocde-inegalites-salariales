const express = require('express');
const app = express();
const cors = require('cors');

const data = [
  {
    id: 'KOR',
    country: 'Corée',
    year: '2021',
    value: 31.1,
    continent: 'Asie',
  },
  {
    id: 'ISR',
    country: 'Israël',
    year: '2019',
    value: 24.3,
    continent: 'Asie',
  },
  {
    id: 'LVA',
    country: 'Lettonie',
    year: '2021',
    value: 24,
    continent: 'Europe',
  },
  {
    id: 'JPN',
    country: 'Japon',
    year: '2021',
    value: 22.1,
    continent: 'Asie',
  },
  {
    id: 'EST',
    country: 'Estonie',
    year: '2021',
    value: 20.4,
    continent: 'Europe',
  },
  {
    id: 'USA',
    country: 'États-Unis',
    year: '2021',
    value: 16.9,
    continent: 'Amérique du Nord',
  },
  {
    id: 'CAN',
    country: 'Canada',
    year: '2021',
    value: 16.7,
    continent: 'Amérique du Nord',
  },
  {
    id: 'FIN',
    country: 'Finlande',
    year: '2020',
    value: 16,
    continent: 'Europe',
  },
  {
    id: 'FRA',
    country: 'France',
    year: '2021',
    value: 15,
    continent: 'Europe',
  },
  {
    id: 'GBR',
    country: 'Royaume-Uni',
    year: '2021',
    value: 14.3,
    continent: 'Europe',
  },
  {
    id: 'DEU',
    country: 'Allemagne',
    year: '2020',
    value: 14.2,
    continent: 'Europe',
  },
  {
    id: 'CHE',
    country: 'Suisse',
    year: '2020',
    value: 13.8,
    continent: 'Europe',
  },
  {
    id: 'NLD',
    country: 'Pays-Bas',
    year: '2021',
    value: 13.2,
    continent: 'Europe',
  },
  {
    id: 'ISL',
    country: 'Islande',
    year: '2018',
    value: 12.9,
    continent: 'Europe',
  },
  {
    id: 'MEX',
    country: 'Mexique',
    year: '2021',
    value: 12.5,
    continent: 'Amérique du Nord',
  },
  {
    id: 'HUN',
    country: 'Hongrie',
    year: '2020',
    value: 12.4,
    continent: 'Europe',
  },
  {
    id: 'AUT',
    country: 'Autriche',
    year: '2021',
    value: 12.2,
    continent: 'Europe',
  },
  {
    id: 'PRT',
    country: 'Portugal',
    year: '2020',
    value: 11.7,
    continent: 'Europe',
  },
  {
    id: 'SVK',
    country: 'République slovaque',
    year: '2021',
    value: 11.7,
    continent: 'Europe',
  },
  {
    id: 'CZE',
    country: 'République tchèque',
    year: '2021',
    value: 11.5,
    continent: 'Europe',
  },
  {
    id: 'TUR',
    country: 'Turquie',
    year: '2018',
    value: 10,
    continent: 'Europe',
  },
  {
    id: 'AUS',
    country: 'Australie',
    year: '2022',
    value: 9.9,
    continent: 'Océanie',
  },
  {
    id: 'LTU',
    country: 'Lituanie',
    year: '2021',
    value: 9,
    continent: 'Europe',
  },
  {
    id: 'GRC',
    country: 'Grèce',
    year: '2020',
    value: 8.9,
    continent: 'Europe',
  },
  {
    id: 'ITA',
    country: 'Italie',
    year: '2020',
    value: 8.7,
    continent: 'Europe',
  },
  {
    id: 'POL',
    country: 'Pologne',
    year: '2020',
    value: 8.7,
    continent: 'Europe',
  },
  {
    id: 'CHL',
    country: 'Chili',
    year: '2020',
    value: 8.6,
    continent: 'Amérique du Sud',
  },
  {
    id: 'SVN',
    country: 'Slovénie',
    year: '2018',
    value: 8.2,
    continent: 'Europe',
  },
  {
    id: 'SWE',
    country: 'Suède',
    year: '2021',
    value: 7.2,
    continent: 'Europe',
  },
  {
    id: 'NZL',
    country: 'Nouvelle-Zélande',
    year: '2021',
    value: 6.7,
    continent: 'Océanie',
  },
  {
    id: 'CRI',
    country: 'Costa Rica',
    year: '2021',
    value: 5.2,
    continent: 'Amérique du Nord',
  },
  {
    id: 'IRL',
    country: 'Irlande',
    year: '2019',
    value: 5.2,
    continent: 'Europe',
  },
  {
    id: 'DNK',
    country: 'Danemark',
    year: '2020',
    value: 5,
    continent: 'Europe',
  },
  {
    id: 'LUX',
    country: 'Luxembourg',
    year: '2010',
    value: 4.6,
    continent: 'Europe',
  },
  {
    id: 'NOR',
    country: 'Norvège',
    year: '2021',
    value: 4.6,
    continent: 'Europe',
  },
  {
    id: 'ESP',
    country: 'Espagne',
    year: '2021',
    value: 3.7,
    continent: 'Europe',
  },
  {
    id: 'COL',
    country: 'Colombie',
    year: '2021',
    value: 3.2,
    continent: 'Amérique du Sud',
  },
  {
    id: 'BEL',
    country: 'Belgique',
    year: '2020',
    value: 1.2,
    continent: 'Europe',
  },
];

app.use(express.json());
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json(data);
});

module.exports = app;

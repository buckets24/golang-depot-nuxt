type CountryType = {
  value: string
  img: string
  label: string
  phone: string
}

const Countries: CountryType[] = [
  {
    value: 'SGP',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SGP.png',
    label: 'Singapore',
    phone: '65'
  },
  {
    value: 'PHL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PHL.png',
    label: 'Philippines',
    phone: '63'
  },
  {
    value: 'MYS',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MYS.png',
    label: 'Malaysia',
    phone: '60'
  },
  {
    value: 'IND',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/IND.png',
    label: 'India',
    phone: '91'
  },
  {
    value: 'IDN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/IDN.png',
    label: 'Indonesia',
    phone: '62'
  },
  {
    value: 'ABW',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ABW.png',
    label: 'Aruba',
    phone: '297'
  },
  {
    value: 'AFG',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/AFG.png',
    label: 'Afghanistan',
    phone: '93'
  },
  {
    value: 'AGO',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/AGO.png',
    label: 'Angola',
    phone: '244'
  },
  {
    value: 'AIA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/AIA.png',
    label: 'Anguilla',
    phone: '1264'
  },
  {
    value: 'ALA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ALA.png',
    label: 'Åland Islands',
    phone: '358'
  },
  {
    value: 'ALB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ALB.png',
    label: 'Albania',
    phone: '355'
  },
  {
    value: 'AND',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/AND.png',
    label: 'Andorra',
    phone: '376'
  },
  {
    value: 'ARE',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ARE.png',
    label: 'United Arab Emirates',
    phone: '971'
  },
  {
    value: 'ARG',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ARG.png',
    label: 'Argentina',
    phone: '54'
  },
  {
    value: 'ARM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ARM.png',
    label: 'Armenia',
    phone: '374'
  },
  {
    value: 'ASM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ASM.png',
    label: 'American Samoa',
    phone: '1684'
  },
  {
    value: 'ATG',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ATG.png',
    label: 'Antigua and Barbuda',
    phone: '1268'
  },
  {
    value: 'AUS',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/AUS.png',
    label: 'Australia',
    phone: '61'
  },
  {
    value: 'AUT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/AUT.png',
    label: 'Austria',
    phone: '43'
  },
  {
    value: 'AZE',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/AZE.png',
    label: 'Azerbaijan',
    phone: '994'
  },
  {
    value: 'BDI',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BDI.png',
    label: 'Burundi',
    phone: '257'
  },
  {
    value: 'BEL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BEL.png',
    label: 'Belgium',
    phone: '32'
  },
  {
    value: 'BEN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BEN.png',
    label: 'Benin',
    phone: '229'
  },
  {
    value: 'BES',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BES.png',
    label: 'Bonaire, Sint Eustatius and Saba',
    phone: '5997'
  },
  {
    value: 'BFA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BFA.png',
    label: 'Burkina Faso',
    phone: '226'
  },
  {
    value: 'BGD',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BGD.png',
    label: 'Bangladesh',
    phone: '880'
  },
  {
    value: 'BGR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BGR.png',
    label: 'Bulgaria',
    phone: '359'
  },
  {
    value: 'BHR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BHR.png',
    label: 'Bahrain',
    phone: '973'
  },
  {
    value: 'BHS',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BHS.png',
    label: 'Bahamas',
    phone: '1242'
  },
  {
    value: 'BIH',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BIH.png',
    label: 'Bosnia and Herzegovina',
    phone: '387'
  },
  {
    value: 'BLM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BLM.png',
    label: 'Saint Barthélemy',
    phone: '590'
  },
  {
    value: 'BLR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BLR.png',
    label: 'Belarus',
    phone: '375'
  },
  {
    value: 'BLZ',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BLZ.png',
    label: 'Belize',
    phone: '501'
  },
  {
    value: 'BMU',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BMU.png',
    label: 'Bermuda',
    phone: '1441'
  },
  {
    value: 'BOL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BOL.png',
    label: 'Bolivia, Plurinational State of',
    phone: '591'
  },
  {
    value: 'BRA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BRA.png',
    label: 'Brazil',
    phone: '55'
  },
  {
    value: 'BRB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BRB.png',
    label: 'Barbados',
    phone: '1246'
  },
  {
    value: 'BRN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BRN.png',
    label: 'Brunei Darussalam',
    phone: '673'
  },
  {
    value: 'BTN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BTN.png',
    label: 'Bhutan',
    phone: '975'
  },
  {
    value: 'BWA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/BWA.png',
    label: 'Botswana',
    phone: '267'
  },
  {
    value: 'CAF',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CAF.png',
    label: 'Central African Republic',
    phone: '236'
  },
  {
    value: 'CAN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CAN.png',
    label: 'Canada',
    phone: '1'
  },
  {
    value: 'CCK',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CCK.png',
    label: 'Cocos (Keeling) Islands',
    phone: '61'
  },
  {
    value: 'CHE',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CHE.png',
    label: 'Switzerland',
    phone: '41'
  },
  {
    value: 'CHN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CHN.png',
    label: 'China',
    phone: '86'
  },
  {
    value: 'CHL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CHL.png',
    label: 'Chile',
    phone: '56'
  },
  {
    value: 'CIV',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CIV.png',
    label: "Côte d'Ivoire",
    phone: '225'
  },
  {
    value: 'CMR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CMR.png',
    label: 'Cameroon',
    phone: '237'
  },
  {
    value: 'COD',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/COD.png',
    label: 'Congo, the Democratic Republic of the',
    phone: '243'
  },
  {
    value: 'COG',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/COG.png',
    label: 'Congo',
    phone: '242'
  },
  {
    value: 'COK',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/COK.png',
    label: 'Cook Islands',
    phone: '682'
  },
  {
    value: 'COL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/COL.png',
    label: 'Colombia',
    phone: '57'
  },
  {
    value: 'COM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/COM.png',
    label: 'Comoros',
    phone: '269'
  },
  {
    value: 'CPV',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CPV.png',
    label: 'Cabo Verde',
    phone: '238'
  },
  {
    value: 'CRI',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CRI.png',
    label: 'Costa Rica',
    phone: '506'
  },
  {
    value: 'CUB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CUB.png',
    label: 'Cuba',
    phone: '53'
  },
  {
    value: 'CUW',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CUW.png',
    label: 'Curaçao',
    phone: '599'
  },
  {
    value: 'CXR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CXR.png',
    label: 'Christmas Island',
    phone: '61'
  },
  {
    value: 'CYM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CYM.png',
    label: 'Cayman Islands',
    phone: '1345'
  },
  {
    value: 'CYP',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CYP.png',
    label: 'Cyprus',
    phone: '357'
  },
  {
    value: 'CZE',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/CZE.png',
    label: 'Czechia',
    phone: '420'
  },
  {
    value: 'DEU',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/DEU.png',
    label: 'Germany',
    phone: '49'
  },
  {
    value: 'DJI',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/DJI.png',
    label: 'Djibouti',
    phone: '253'
  },
  {
    value: 'DMA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/DMA.png',
    label: 'Dominica',
    phone: '1767'
  },
  {
    value: 'DNK',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/DNK.png',
    label: 'Denmark',
    phone: '45'
  },
  {
    value: 'DOM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/DOM.png',
    label: 'Dominican Republic',
    phone: '1809'
  },
  {
    value: 'DZA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/DZA.png',
    label: 'Algeria',
    phone: '213'
  },
  {
    value: 'ECU',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ECU.png',
    label: 'Ecuador',
    phone: '593'
  },
  {
    value: 'EGY',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/EGY.png',
    label: 'Egypt',
    phone: '20'
  },
  {
    value: 'ERI',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ERI.png',
    label: 'Eritrea',
    phone: '291'
  },
  {
    value: 'ESH',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ESH.png',
    label: 'Western Sahara',
    phone: '212'
  },
  {
    value: 'ESP',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ESP.png',
    label: 'Spain',
    phone: '34'
  },
  {
    value: 'EST',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/EST.png',
    label: 'Estonia',
    phone: '372'
  },
  {
    value: 'ETH',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ETH.png',
    label: 'Ethiopia',
    phone: '251'
  },
  {
    value: 'FIN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/FIN.png',
    label: 'Finland',
    phone: '358'
  },
  {
    value: 'FJI',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/FJI.png',
    label: 'Fiji',
    phone: '679'
  },
  {
    value: 'FLK',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/FLK.png',
    label: 'Falkland Islands (Malvinas)',
    phone: '500'
  },
  {
    value: 'FRA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/FRA.png',
    label: 'France',
    phone: '33'
  },
  {
    value: 'FRO',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/FRO.png',
    label: 'Faroe Islands',
    phone: '298'
  },
  {
    value: 'FSM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/FSM.png',
    label: 'Micronesia, Federated States of',
    phone: '691'
  },
  {
    value: 'GAB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GAB.png',
    label: 'Gabon',
    phone: '241'
  },
  {
    value: 'GBR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GBR.png',
    label: 'United Kingdom',
    phone: '44'
  },
  {
    value: 'GEO',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GEO.png',
    label: 'Georgia',
    phone: '995'
  },
  {
    value: 'GGY',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GGY.png',
    label: 'Guernsey',
    phone: '44'
  },
  {
    value: 'GHA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GHA.png',
    label: 'Ghana',
    phone: '233'
  },
  {
    value: 'GIB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GIB.png',
    label: 'Gibraltar',
    phone: '350'
  },
  {
    value: 'GIN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GIN.png',
    label: 'Guinea',
    phone: '224'
  },
  {
    value: 'GLP',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GLP.png',
    label: 'Guadeloupe',
    phone: '590'
  },
  {
    value: 'GMB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GMB.png',
    label: 'Gambia',
    phone: '220'
  },
  {
    value: 'GNB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GNB.png',
    label: 'Guinea-Bissau',
    phone: '245'
  },
  {
    value: 'GNQ',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GNQ.png',
    label: 'Equatorial Guinea',
    phone: '240'
  },
  {
    value: 'GRC',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GRC.png',
    label: 'Greece',
    phone: '30'
  },
  {
    value: 'GRD',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GRD.png',
    label: 'Grenada',
    phone: '1473'
  },
  {
    value: 'GRL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GRL.png',
    label: 'Greenland',
    phone: '299'
  },
  {
    value: 'GTM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GTM.png',
    label: 'Guatemala',
    phone: '502'
  },
  {
    value: 'GUF',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GUF.png',
    label: 'French Guiana',
    phone: '594'
  },
  {
    value: 'GUM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GUM.png',
    label: 'Guam',
    phone: '1671'
  },
  {
    value: 'GUY',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/GUY.png',
    label: 'Guyana',
    phone: '592'
  },
  {
    value: 'HKG',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/HKG.png',
    label: 'Hong Kong',
    phone: '852'
  },
  {
    value: 'HND',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/HND.png',
    label: 'Honduras',
    phone: '504'
  },
  {
    value: 'HRV',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/HRV.png',
    label: 'Croatia',
    phone: '385'
  },
  {
    value: 'HTI',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/HTI.png',
    label: 'Haiti',
    phone: '509'
  },
  {
    value: 'HUN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/HUN.png',
    label: 'Hungary',
    phone: '36'
  },
  {
    value: 'IMN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/IMN.png',
    label: 'Isle of Man',
    phone: '44'
  },
  {
    value: 'IOT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/IOT.png',
    label: 'British Indian Ocean Territory',
    phone: '246'
  },
  {
    value: 'IRL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/IRL.png',
    label: 'Ireland',
    phone: '353'
  },
  {
    value: 'IRN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/IRN.png',
    label: 'Iran, Islamic Republic of',
    phone: '98'
  },
  {
    value: 'IRQ',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/IRQ.png',
    label: 'Iraq',
    phone: '964'
  },
  {
    value: 'ISL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ISL.png',
    label: 'Iceland',
    phone: '354'
  },
  {
    value: 'ISR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ISR.png',
    label: 'Israel',
    phone: '972'
  },
  {
    value: 'ITA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ITA.png',
    label: 'Italy',
    phone: '39'
  },
  {
    value: 'JAM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/JAM.png',
    label: 'Jamaica',
    phone: '1876'
  },
  {
    value: 'JEY',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/JEY.png',
    label: 'Jersey',
    phone: '44'
  },
  {
    value: 'JOR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/JOR.png',
    label: 'Jordan',
    phone: '962'
  },
  {
    value: 'JPN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/JPN.png',
    label: 'Japan',
    phone: '81'
  },
  {
    value: 'KAZ',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/KAZ.png',
    label: 'Kazakhstan',
    phone: '76'
  },
  {
    value: 'KEN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/KEN.png',
    label: 'Kenya',
    phone: '254'
  },
  {
    value: 'KGZ',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/KGZ.png',
    label: 'Kyrgyzstan',
    phone: '996'
  },
  {
    value: 'KHM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/KHM.png',
    label: 'Cambodia',
    phone: '855'
  },
  {
    value: 'KIR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/KIR.png',
    label: 'Kiribati',
    phone: '686'
  },
  {
    value: 'KNA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/KNA.png',
    label: 'Saint Kitts and Nevis',
    phone: '1869'
  },
  {
    value: 'KOR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/KOR.png',
    label: 'Korea, Republic of',
    phone: '82'
  },
  {
    value: 'KWT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/KWT.png',
    label: 'Kuwait',
    phone: '965'
  },
  {
    value: 'LAO',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LAO.png',
    label: "Lao People's Democratic Republic",
    phone: '856'
  },
  {
    value: 'LBN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LBN.png',
    label: 'Lebanon',
    phone: '961'
  },
  {
    value: 'LBR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LBR.png',
    label: 'Liberia',
    phone: '231'
  },
  {
    value: 'LBY',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LBY.png',
    label: 'Libya',
    phone: '218'
  },
  {
    value: 'LCA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LCA.png',
    label: 'Saint Lucia',
    phone: '1758'
  },
  {
    value: 'LIE',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LIE.png',
    label: 'Liechtenstein',
    phone: '423'
  },
  {
    value: 'LKA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LKA.png',
    label: 'Sri Lanka',
    phone: '94'
  },
  {
    value: 'LSO',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LSO.png',
    label: 'Lesotho',
    phone: '266'
  },
  {
    value: 'LTU',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LTU.png',
    label: 'Lithuania',
    phone: '370'
  },
  {
    value: 'LUX',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LUX.png',
    label: 'Luxembourg',
    phone: '352'
  },
  {
    value: 'LVA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/LVA.png',
    label: 'Latvia',
    phone: '371'
  },
  {
    value: 'MAC',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MAC.png',
    label: 'Macao',
    phone: '853'
  },
  {
    value: 'MAF',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MAF.png',
    label: 'Saint Martin (French part)',
    phone: '590'
  },
  {
    value: 'MAR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MAR.png',
    label: 'Morocco',
    phone: '212'
  },
  {
    value: 'MCO',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MCO.png',
    label: 'Monaco',
    phone: '377'
  },
  {
    value: 'MDA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MDA.png',
    label: 'Moldova, Republic of',
    phone: '373'
  },
  {
    value: 'MDG',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MDG.png',
    label: 'Madagascar',
    phone: '261'
  },
  {
    value: 'MDV',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MDV.png',
    label: 'Maldives',
    phone: '960'
  },
  {
    value: 'MEX',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MEX.png',
    label: 'Mexico',
    phone: '52'
  },
  {
    value: 'MHL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MHL.png',
    label: 'Marshall Islands',
    phone: '692'
  },
  {
    value: 'MKD',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MKD.png',
    label: 'Macedonia, the former Yugoslav Republic of',
    phone: '389'
  },
  {
    value: 'MLI',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MLI.png',
    label: 'Mali',
    phone: '223'
  },
  {
    value: 'MLT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MLT.png',
    label: 'Malta',
    phone: '356'
  },
  {
    value: 'MMR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MMR.png',
    label: 'Myanmar',
    phone: '95'
  },
  {
    value: 'MNE',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MNE.png',
    label: 'Montenegro',
    phone: '382'
  },
  {
    value: 'MNG',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MNG.png',
    label: 'Mongolia',
    phone: '976'
  },
  {
    value: 'MNP',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MNP.png',
    label: 'Northern Mariana Islands',
    phone: '1670'
  },
  {
    value: 'MOZ',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MOZ.png',
    label: 'Mozambique',
    phone: '258'
  },
  {
    value: 'MRT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MRT.png',
    label: 'Mauritania',
    phone: '222'
  },
  {
    value: 'MSR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MSR.png',
    label: 'Montserrat',
    phone: '1664'
  },
  {
    value: 'MTQ',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MTQ.png',
    label: 'Martinique',
    phone: '596'
  },
  {
    value: 'MUS',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MUS.png',
    label: 'Mauritius',
    phone: '230'
  },
  {
    value: 'MWI',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MWI.png',
    label: 'Malawi',
    phone: '265'
  },
  {
    value: 'MYT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/MYT.png',
    label: 'Mayotte',
    phone: '262'
  },
  {
    value: 'NAM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NAM.png',
    label: 'Namibia',
    phone: '264'
  },
  {
    value: 'NCL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NCL.png',
    label: 'New Caledonia',
    phone: '687'
  },
  {
    value: 'NER',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NER.png',
    label: 'Niger',
    phone: '227'
  },
  {
    value: 'NFK',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NFK.png',
    label: 'Norfolk Island',
    phone: '672'
  },
  {
    value: 'NGA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NGA.png',
    label: 'Nigeria',
    phone: '234'
  },
  {
    value: 'NIC',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NIC.png',
    label: 'Nicaragua',
    phone: '505'
  },
  {
    value: 'NIU',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NIU.png',
    label: 'Niue',
    phone: '683'
  },
  {
    value: 'NLD',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NLD.png',
    label: 'Netherlands',
    phone: '31'
  },
  {
    value: 'NOR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NOR.png',
    label: 'Norway',
    phone: '47'
  },
  {
    value: 'NPL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NPL.png',
    label: 'Nepal',
    phone: '977'
  },
  {
    value: 'NRU',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NRU.png',
    label: 'Nauru',
    phone: '674'
  },
  {
    value: 'NZL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/NZL.png',
    label: 'New Zealand',
    phone: '64'
  },
  {
    value: 'OMN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/OMN.png',
    label: 'Oman',
    phone: '968'
  },
  {
    value: 'PAK',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PAK.png',
    label: 'Pakistan',
    phone: '92'
  },
  {
    value: 'PAN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PAN.png',
    label: 'Panama',
    phone: '507'
  },
  {
    value: 'PCN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PCN.png',
    label: 'Pitcairn',
    phone: '64'
  },
  {
    value: 'PER',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PER.png',
    label: 'Peru',
    phone: '51'
  },
  {
    value: 'PLW',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PLW.png',
    label: 'Palau',
    phone: '680'
  },
  {
    value: 'PNG',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PNG.png',
    label: 'Papua New Guinea',
    phone: '675'
  },
  {
    value: 'POL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/POL.png',
    label: 'Poland',
    phone: '48'
  },
  {
    value: 'PRI',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PRI.png',
    label: 'Puerto Rico',
    phone: '1787'
  },
  {
    value: 'PRK',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PRK.png',
    label: "Korea, Democratic People's Republic of",
    phone: '850'
  },
  {
    value: 'PRT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PRT.png',
    label: 'Portugal',
    phone: '351'
  },
  {
    value: 'PRY',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PRY.png',
    label: 'Paraguay',
    phone: '595'
  },
  {
    value: 'PSE',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PSE.png',
    label: 'Palestine, State of',
    phone: '970'
  },
  {
    value: 'PYF',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/PYF.png',
    label: 'French Polynesia',
    phone: '689'
  },
  {
    value: 'QAT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/QAT.png',
    label: 'Qatar',
    phone: '974'
  },
  {
    value: 'REU',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/REU.png',
    label: 'Réunion',
    phone: '262'
  },
  {
    value: 'ROU',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ROU.png',
    label: 'Romania',
    phone: '40'
  },
  {
    value: 'RUS',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/RUS.png',
    label: 'Russian Federation',
    phone: '7'
  },
  {
    value: 'RWA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/RWA.png',
    label: 'Rwanda',
    phone: '250'
  },
  {
    value: 'SAU',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SAU.png',
    label: 'Saudi Arabia',
    phone: '966'
  },
  {
    value: 'SDN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SDN.png',
    label: 'Sudan',
    phone: '249'
  },
  {
    value: 'SEN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SEN.png',
    label: 'Senegal',
    phone: '221'
  },
  {
    value: 'SGS',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SGS.png',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500'
  },
  {
    value: 'SHN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SHN.png',
    label: 'Saint Helena, Ascension and Tristan da Cunha',
    phone: '290'
  },
  {
    value: 'SJM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SJM.png',
    label: 'Svalbard and Jan Mayen',
    phone: '4779'
  },
  {
    value: 'SLB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SLB.png',
    label: 'Solomon Islands',
    phone: '677'
  },
  {
    value: 'SLE',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SLE.png',
    label: 'Sierra Leone',
    phone: '232'
  },
  {
    value: 'SLV',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SLV.png',
    label: 'El Salvador',
    phone: '503'
  },
  {
    value: 'SMR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SMR.png',
    label: 'San Marino',
    phone: '378'
  },
  {
    value: 'SOM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SOM.png',
    label: 'Somalia',
    phone: '252'
  },
  {
    value: 'SPM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SPM.png',
    label: 'Saint Pierre and Miquelon',
    phone: '508'
  },
  {
    value: 'SRB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SRB.png',
    label: 'Serbia',
    phone: '381'
  },
  {
    value: 'SSD',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SSD.png',
    label: 'South Sudan',
    phone: '211'
  },
  {
    value: 'STP',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/STP.png',
    label: 'Sao Tome and Principe',
    phone: '239'
  },
  {
    value: 'SUR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SUR.png',
    label: 'Surilabel',
    phone: '597'
  },
  {
    value: 'SVK',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SVK.png',
    label: 'Slovakia',
    phone: '421'
  },
  {
    value: 'SVN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SVN.png',
    label: 'Slovenia',
    phone: '386'
  },
  {
    value: 'SWE',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SWE.png',
    label: 'Sweden',
    phone: '46'
  },
  {
    value: 'SWZ',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SWZ.png',
    label: 'Swaziland',
    phone: '268'
  },
  {
    value: 'SXM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SXM.png',
    label: 'Sint Maarten (Dutch part)',
    phone: '1721'
  },
  {
    value: 'SYC',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SYC.png',
    label: 'Seychelles',
    phone: '248'
  },
  {
    value: 'SYR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/SYR.png',
    label: 'Syrian Arab Republic',
    phone: '963'
  },
  {
    value: 'TCA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TCA.png',
    label: 'Turks and Caicos Islands',
    phone: '1649'
  },
  {
    value: 'TCD',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TCD.png',
    label: 'Chad',
    phone: '235'
  },
  {
    value: 'TGO',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TGO.png',
    label: 'Togo',
    phone: '228'
  },
  {
    value: 'THA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/THA.png',
    label: 'Thailand',
    phone: '66'
  },
  {
    value: 'TJK',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TJK.png',
    label: 'Tajikistan',
    phone: '992'
  },
  {
    value: 'TKL',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TKL.png',
    label: 'Tokelau',
    phone: '690'
  },
  {
    value: 'TKM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TKM.png',
    label: 'Turkmenistan',
    phone: '993'
  },
  {
    value: 'TLS',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TLS.png',
    label: 'Timor-Leste',
    phone: '670'
  },
  {
    value: 'TON',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TON.png',
    label: 'Tonga',
    phone: '676'
  },
  {
    value: 'TTO',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TTO.png',
    label: 'Trinidad and Tobago',
    phone: '1868'
  },
  {
    value: 'TUN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TUN.png',
    label: 'Tunisia',
    phone: '216'
  },
  {
    value: 'TUR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TUR.png',
    label: 'Turkey',
    phone: '90'
  },
  {
    value: 'TUV',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TUV.png',
    label: 'Tuvalu',
    phone: '688'
  },
  {
    value: 'TWN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TWN.png',
    label: 'Taiwan, Province of China',
    phone: '886'
  },
  {
    value: 'TZA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/TZA.png',
    label: 'Tanzania, United Republic of',
    phone: '255'
  },
  {
    value: 'UGA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/UGA.png',
    label: 'Uganda',
    phone: '256'
  },
  {
    value: 'UKR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/UKR.png',
    label: 'Ukraine',
    phone: '380'
  },
  {
    value: 'UMI',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/UMI.png',
    label: 'United States Minor Outlying Islands',
    phone: '1'
  },
  {
    value: 'URY',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/URY.png',
    label: 'Uruguay',
    phone: '598'
  },
  {
    value: 'USA',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/USA.png',
    label: 'United States of America',
    phone: '1'
  },
  {
    value: 'UZB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/UZB.png',
    label: 'Uzbekistan',
    phone: '998'
  },
  {
    value: 'VAT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/VAT.png',
    label: 'Holy See',
    phone: '379'
  },
  {
    value: 'VCT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/VCT.png',
    label: 'Saint Vincent and the Grenadines',
    phone: '1784'
  },
  {
    value: 'VEN',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/VEN.png',
    label: 'Venezuela, Bolivarian Republic of',
    phone: '58'
  },
  {
    value: 'VGB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/VGB.png',
    label: 'Virgin Islands, British',
    phone: '1284'
  },
  {
    value: 'VIR',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/VIR.png',
    label: 'Virgin Islands, U.S.',
    phone: '1340'
  },
  {
    value: 'VNM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/VNM.png',
    label: 'Viet Nam',
    phone: '84'
  },
  {
    value: 'VUT',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/VUT.png',
    label: 'Vanuatu',
    phone: '678'
  },
  {
    value: 'WLF',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/WLF.png',
    label: 'Wallis and Futuna',
    phone: '681'
  },
  {
    value: 'WSM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/WSM.png',
    label: 'Samoa',
    phone: '685'
  },
  {
    value: 'YEM',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/YEM.png',
    label: 'Yemen',
    phone: '967'
  },
  {
    value: 'ZAF',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ZAF.png',
    label: 'South Africa',
    phone: '27'
  },
  {
    value: 'ZMB',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ZMB.png',
    label: 'Zambia',
    phone: '260'
  },
  {
    value: 'ZWE',
    img: 'https://s3-ap-southeast-1.amazonaws.com/omh0pub/static/ZWE.png',
    label: 'Zimbabwe',
    phone: '263'
  }
]

export default Countries
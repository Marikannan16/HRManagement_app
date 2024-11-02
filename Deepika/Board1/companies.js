import logo from '../../images/logo.png'; 
import cremin from '../../images/cremin.png'; 
import Han from '../../images/Han.jpeg'; 
import Hamall from '../../images/Hamall.jpeg'; 
import Lehner from '../../images/Lehner.jpg'; 
import Mann from '../../images/Mann.avif'; 
import Zeme from '../../images/Zeme.jpeg'; 

const companies = [
    {
      SNO: 1,
      companyname: 'Acme Corporation',
      complied: 15,
      notComplied: 2,
      partiallyComplied: 4,
      overdue: 1,
      logo: logo 
    },
    {
      SNO: 2,
      companyname: 'Cremin Inc',
      complied: 27,
      notComplied: 4,
      partiallyComplied: 7,
      overdue: 9,
      logo: cremin 
    },
    {
      SNO: 3,
      companyname: 'Han Inc',
      complied: 13,
      notComplied: 4,
      partiallyComplied: 7,
      overdue: 2,
      logo: Han 
    },
    {
      SNO: 4,
      companyname: 'Hamll - Gusikowski',
      complied: 18,
      notComplied: 3,
      partiallyComplied: 5,
      overdue: 1,
      logo: Hamall 
    },
    {
      SNO: 5,
      companyname: 'Lehner Inc',
      complied: 24,
      notComplied: 6,
      partiallyComplied: 2,
      overdue: 1,
      logo: Lehner 
    },
    {
      SNO: 6,
      companyname: 'Mann Group',
      complied: 15,
      notComplied: 16,
      partiallyComplied: 2,
      overdue: 3,
      logo: Mann 
    },
    {
      SNO: 7,
      companyname: 'Zeme and Sons',
      complied: 4,
      notComplied: 3,
      partiallyComplied: 2,
      overdue: 2,
      logo: Zeme 
    }
];

export default companies;

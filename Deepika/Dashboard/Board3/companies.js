import logo from '../../images/logo.png'; 
import Han from '../../images/Han.jpeg'; 
import Hamall from '../../images/Hamall.jpeg'; 
import Lehner from '../../images/Lehner.jpg'; 
import Zeme from '../../images/Zeme.jpeg'; 
const companies = [
  {
    SNO: 1,
    Date: '13-07-2024',
    CompanyName: 'Acme Corporation',
    logo: logo,
    State: 'Tamil Nadu',
    Branch: 'Royapuram',
    Activity: 'PF Remittance',
    Status: 'Not Complied',
  },
  {
    SNO: 2,
    Date: '13-07-2024',
    CompanyName: 'Hamll - Gusikowski',
    logo: Hamall, 
    State: 'Tamil Nadu',
    Branch: 'Indira Nagar',
    Activity: 'PF Remittance',
    Status: 'Not Complied',
  },
  {
    SNO: 3,
    Date: '13-07-2024',
    CompanyName: 'Lehner Inc',
    logo: Lehner,
    State: 'Tamil Nadu',
    Branch: 'Madurai',
    Activity: 'PF Return',
    Status: 'Partially Complied',
  },
  {
    SNO: 4,
    Date: '12-07-2024',
    CompanyName: 'Han Inc',
    logo: Han, 
    State: 'Tamil Nadu',
    Branch: 'Adyar',
    Activity: 'Trade Licence',
    Status: 'Complied',
  },
  {
    SNO: 5,
    Date: '11-07-2024',
    CompanyName: 'Zeme and Sons',
    logo: Zeme,
    State: 'Mumbai',
    Branch: 'Nagoan',
    Activity: 'S&E Registration',
    Status: 'Not Complied',
  },
];

export default companies;

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
    State: 'Tamilnadu',
    Branch: 'Rayapuram',
    Activity: 'PF Remittance',
    Status: 'Not Complied',
  },
  {
    SNO: 2,
    Date: '13-07-2024',
    CompanyName: 'Hamll - Gusikowski',
    logo: Hamall, 
    State: 'Tamilnadu',
    Branch: 'Indira Nagar',
    Activity: 'PF Remittance',
    Status: 'Not Complied',
  },
  {
    SNO: 3,
    Date: '13-07-2024',
    CompanyName: 'Lehner Inc',
    logo: Lehner,
    State: 'Tamilnadu',
    Branch: 'Madurai',
    Activity: 'PF Return',
    Status: 'Partially Complied',
  },
  {
    SNO: 4,
    Date: '12-07-2024',
    CompanyName: 'Han Inc',
    logo: Han, 
    State: 'Tamilnadu',
    Branch: 'Adayar',
    Activity: 'Trade Licence',
    Status: 'Complied',
  },
  {
    SNO: 5,
    Date: '11-07-2024',
    CompanyName: 'Zeme and Sons',
    logo: Zeme,
    State: 'Mumbai',
    Branch: 'Nagaon',
    Activity: 'S&E Registration',
    Status: 'Not Complied',
  },
];

export default companies;

import {render} from '@testing-library/react-native';
import OfferCard from '../OfferCard';

describe('OfferCard component', () => {
  
  const offer = 
  {
    "id": 1,
    "title": "20% Cashback on Electronics",
    "description": "Get 20% cashback on all electronics purchases over $100.", 
    "cashbackAmount": 20, 
    "expirationDate": "2023-12-31",
    "retailerLogo": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sneakers-store-brand-logo%2C-sneaker-store-logo-design-template-cd4d67885f338eb3623ea9e1a7d92328_screen.jpg",
    "termsAndConditions": "Offer valid only on purchases made through our"
};
  
  it('renders correctly', () => {
   
    const component = (
      <OfferCard offer={offer}/>
    );

    const screen = render(component);

    const title = screen.queryAllByText('20% Cashback on Electronics');
    expect(title.length).toBe(1);

    const desc = screen.queryAllByText('Get 20% cashback on all electronics purchases over $100.');
    expect(desc.length).toBe(1);

    const cashback = screen.queryAllByText('Cashback: 20%');
    expect(cashback.length).toBe(1);

    const exp = screen.queryAllByText('Expires: 2023-12-31');
    expect(exp.length).toBe(1);
  });
});
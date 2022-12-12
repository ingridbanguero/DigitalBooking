import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider, UserContext } from '../context/UserContext';
import FormLogin from '../components/FormLogin/FormLogin';

describe('Buscador', () => {
    const view = render(
        <UserProvider>
            <BrowserRouter>
                <FormLogin/>
            </BrowserRouter>
            
        </UserProvider>
    );
    it('Renderiza apropiadamente', () => {
      expect(view.container).toBeInTheDocument();
    })
})
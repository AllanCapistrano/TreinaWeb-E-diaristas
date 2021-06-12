import { styled } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

export const FooterStyled = styled('footer')`
    background-color: ${({ theme }) => theme.palette.primary.main};
    
    /*A função getContrastText() encontra uma cor de contraste a
    partir da cor passada como parâmetro*/
    color: ${({ theme }) => 
    theme.palette.getContrastText(theme.palette.primary.main)};
    padding: ${({ theme }) => theme.spacing(4)} 0;
    margin-top: auto;
`;

export const FooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap; //Quando não tiver espaço, coloca os elementos em coluna

    ${({ theme }) => theme.breakpoints.down('md')} {
        gap: ${({ theme }) => theme.spacing(5)};
    };
`;

export const FooterTitle = styled((props) => (
    //Estilizando um componente que será retornado, para não
    //precisar passar essas propriedades toda vez que for utilizá-lo
    <Typography component={'h2'} variant={'body2'} {...props} />
))`
    font-weight: bold;
`;

export const AppList = styled('ul')`
    display: flex;
    list-style-type: none;
    padding: 0;
    gap: ${({ theme }) => theme.spacing()};

    img {
        width: 122px;
    }
`;
import { ReactComponent as SoulSVG } from '../../../images/avatar/soul_circle.svg';
import styled from '@emotion/styled';
import { useContext } from 'react';
import ThemeContext from '../../../context/ThemeContext/ThemeContext';

function Soul() {
    const { theme } = useContext(ThemeContext);
    const Soulcolor = styled.i`
        path {
            fill: ${theme.cHeader};
        }
        circle {
            stroke: ${theme.cHeader};
        }
    `;
    return (
        <>
            <Soulcolor>
                <SoulSVG />
            </Soulcolor>
        </>
    );
}

export default Soul;

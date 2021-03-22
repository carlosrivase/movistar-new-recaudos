import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    position        : relative;
    display         : flex;
    flex-flow       : ${props => props.direction} wrap;
    justify-content : ${props => props.jc};
    align-items     : ${props => props.alg};
    flex            : ${props => props.flex};
`;

function Flex({
                  children,
                  jc="center",
                  alg="center",
                  flex="0 0 auto",
                  className,
                  direction="row"

              }) {
    return (
        <Container
            jc={jc}
            alg={alg}
            flex={flex}
            className={className}
            direction={direction}
        >
            {children}
        </Container>
    )
}

export default React.memo(Flex);

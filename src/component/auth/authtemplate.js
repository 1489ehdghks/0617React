import styled from "styled-components"

const AuthtemplateBlock = styled.div`
    color : gray;
`;

const WhiteBox = styled.div`
    width : 720px;
    heigh : 360px;
    color : red;
`;



const AuthTemplate =({chrildren})=>{
    return(
        
            <AuthtemplateBlock>
                1234
                    <div >
                        <WhiteBox>
                        1234
                        </WhiteBox>
                    </div>
            </AuthtemplateBlock>
        
    )
}

export default AuthTemplate;
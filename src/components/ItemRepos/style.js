import styled from "styled-components";

export const ItemContainer = styled.div`
    padding: 2rem;
    h3{
        font-size: 3rem;
        color: #fafafa;
    }

    p{
        font-size: 2rem;
        color: #fafafa60;
        padding-bottom: 5px;
    }

    a{
       

    }
    
    .link-repository, .link-remove{
        display: flex;
        align-self: flex-start;
        text-decoration: none;
        color: #fafafa;
        padding: 0 0 1rem 0;
        font-size: 1.2rem;
        cursor: pointer;
    
    }

    .link-remove{
        color: red;
    }

    .link-repository:hover{
        color: #fafafa60;
     
        text-decoration: underline;
    }

    .link-remove:hover{
        color: #FF000080;
        text-decoration: underline;
    }
`
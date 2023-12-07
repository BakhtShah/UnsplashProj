import styled from "styled-components";

export const Tab=styled.span` 
font-weight: 500;
cursor: pointer;
padding:15px 0;
height:100%;
position:relative;
-webkit-user-select: none;
user-select: none;
color: ${({isSelected})=> isSelected? '#000000':'#767677'};
&::after{
    content:"";
    width:100%;
    border-bottom: 3px solid 
    ${({isSelected})=> isSelected? '#000000':'transparent'};
    position:absolute;
    bottom:0;
    left:0;
}`;
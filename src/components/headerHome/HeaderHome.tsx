import React, { Component } from 'react';

const HeaderHome = (props : any) => {
    return (
        <div style={styles.container}>
            <h3 style={styles.textTitle}>{props.title}</h3>
        </div>
    );
}

const styles = {
    container: {
        display:'flex', 
        height:'14vh', 
        justifyContent:'center', 
        alignItems:'center', 
        width:'100%', 
        position:'fixed', 
        flex:1, 
        flexDirection:'column', 
        backgroundColor:'#06E752'
    },
    textTitle : {
        color:'white'
    }
  } as const;

export default HeaderHome;
import React, { Component } from 'react';

const HeaderHome = (props : any) => {
    return (
        <div style={{display:'flex', }}>
          <div style={{height:'18vh', width:'100%', display:'flex', position:'fixed', flex:1, flexDirection:'column',}}>
            <div style={{height:80, width:'100%',justifyContent:'center', display:'flex', alignItems:'center', backgroundColor:'#06E752' }}>
              <div style={{ textDecoration: 'none', color:'black' }}>
                <div style={{marginRight:'5vh',height:50,  justifyContent:'center', alignItems:'center', display:'flex',}}>
                    <h3 style={{color:'white'}}>{props.title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default HeaderHome;
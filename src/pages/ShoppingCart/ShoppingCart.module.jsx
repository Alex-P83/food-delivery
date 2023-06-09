const styles = {
    wrapper:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        gridTemplateRows:'auto auto',
        gap:'15px',
        height:`calc(100% - 112px)`,
        pb:'15px',
    },
    form:{
        gridArea: '1 / 1 / 2 / 2',
        display:'flex',
        flexDirection:'column',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius:'8px',
        p:'15px',
        overflowY:'auto',
        flexGrow:1,
    },
    cart:{
        gridArea: '1 / 2 / 2 / 3',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius:'8px',
        p:'15px',
        overflowY:'auto',
        flexGrow:1,
    },
    card:{
        width:'100%',
        'img':{
            width:'250px',
            height:'250px',
            objectFit:'cover',
        }
    }, 
    cardContent:{
        display:'flex',
        justifyContent:'space-between',
    },
    shoppingCartAction:{
        gridArea: '2 / 1 / 3 / 3',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
    }   
}

export default styles;
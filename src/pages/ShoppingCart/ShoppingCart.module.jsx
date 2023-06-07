const styles = {
    wrapper:{
        display:'flex',
        gap:'15px',
        height:'100%',
        pb:'15px',
    },
    form:{
        display:'flex',
        flexDirection:'column',
        width:'50%',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius:'8px',
        p:'30px 15px',
        overflowY:'auto',
        flexGrow:1,
    },
    cart:{
        width:'50%',
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
    }   
}

export default styles;
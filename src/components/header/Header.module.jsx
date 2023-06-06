const styles = {
    nav:{
        display:'flex',
        alignItems:'center',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius:'8px',
        p:'15px',
        my:'15px',
        background:'#1976d2',
    },
    navItem:{
        width:'auto',
        'a':{
            fontWeight:700,
            color:'#fff',
            textDecoration:'none'
        },
        '&:not(:last-child)':{
            borderRight:'1px solid #eee',
        }
    }
}

export default styles;
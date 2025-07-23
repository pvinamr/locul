import { Pressable, StyleSheet } from "react-native"

function ThemedButton({style, ...props }){
    return(
        <Pressable
            style = {({pressed}) => [styles.btn, pressed && styles.pressed, styles]}{...props}/>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#253b32ff',
        padding: 18,
        borderRadius: 6,
        marginVertical: 10
    },

    pressed: {
        opacity: 0.5
    }

})
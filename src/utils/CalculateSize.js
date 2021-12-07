import { Dimensions, PixelRatio } from 'react-native';
// Este ancho es el que establece la parte de diseño y la escala que se va a usar para calcular el valor de un pixel a un dp
const DPWidth = 432;
// Este alto es el que establece la parte de diseño y la escala que se va a usar para calcular el valor de un pixel a un dp
const DPHeight = 809;
/* 
Esta funcion basicamente se obtiene la escala del tamaño de la fuente con el componente PixelRatio de 
react native y lo multiplicamos por el sp que es timo de medida que se usa para fuentes en general
*/
export function FontSizeRP(size) { return size * PixelRatio.getFontScale() }
/* 
Esta funcion obtenemos el alto de la pantalla con "Dimensions.get('screen').height" y le restamos el tamaño 
de la barra de accion de android con "StatusBar.currentHeight" seguido a eso lo dividimos segun la escala 
que tenemos del ALTO "DPHeight" para obtener el valor de en pixeles y el valor de es dp equivalente ya en pixeles
lo multiplicamos por el dp de diseño
*/

export function HeightDP(dp) { return (dp * ((Dimensions.get('window').height) / DPHeight)) }
/*
Esta funcion obtenemos el ANCHO de la pantalla con "Dimensions.get('screen').width" lo dividimos segun la escala 
que tenemos del ancho "DPWidth" para obtener el valor de en pixeles y el valor de es dp equivalente ya en pixeles
lo multiplicamos por el dp de diseño
*/
export function WidthDP(dp) { return (dp * (Dimensions.get('screen').width / DPWidth)) }
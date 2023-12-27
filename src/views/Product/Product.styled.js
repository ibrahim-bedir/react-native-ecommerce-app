import { FlatList } from 'react-native'
import { Image, Text, View, styled } from 'tamagui'
import colors from '../../styles/colors'

export const ProductText = styled(Text, {
  fontSize: 30,
  fontFamily: 'InterMedium',
})

export const FlatListStyled = styled(FlatList, {
  flex: 1,
  padding: 10,
  paddingVertical: 20,
})

// productDetail

export const ImageStyled = styled(Image, {})

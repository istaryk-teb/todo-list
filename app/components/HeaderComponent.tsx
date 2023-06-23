import { StyleSheet, Text, View } from 'react-native';

type HeaderComponentProps = {
  title: string,
  subTitle?: string
}

export function HeaderComponent({title, subTitle}: HeaderComponentProps): JSX.Element {
  return (<View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12
  },
  title: {
    paddingTop: 12,
    fontSize: 48,
    width: '100%'
  },
  subTitle: {
    fontSize: 36,
    width: '100%',
    paddingBottom: 16
  }
});

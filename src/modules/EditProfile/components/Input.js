const CustomTextInput = ({value, label, onChangeText, style}) => (
    <View>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
            value={value}
            style={style}
            onChangeText={onChangeText}
        />
    </View>
);
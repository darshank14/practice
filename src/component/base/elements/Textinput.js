// import React, { useState } from 'react';
// import { View, TextInput, Text, TouchableOpacity } from 'react-native';
// import { useField, useFormikContext } from 'formik';
// import Config from '../../../config';
// import Utils from '../../../utils';

// const Input = (props) => {
//     const { name, placeholder, label, step, type, onChangeText, containerStyle, inputStyle, ...rest } = props;
//     const [field, meta] = useField({ name });
//     const { setFieldTouched, setFieldValue } = useFormikContext();
//     const [showPassword, setShowPassword] = useState(false); // State variable for toggling password visibility

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const renderError = () => {
//         return (
//             meta.touched && meta.error ? (
//                 <Text style={{ color: 'red' }}>{meta.error}</Text>
//             ) : null
//         );
//     };

//     return (
//         <View style={containerStyle}>
//             {label && <Text style={{ marginBottom: 5,color:Config.Theme.COLOR_0000 }}>{Utils.I18n.t(label)}</Text>}
//             <View style={{ flexDirection: 'row', borderWidth: 1, marginBottom: 10, alignItems:'center'}}>
//                 <TextInput
//                     style={[inputStyle,{ height: 40, borderColor: 'gray', flex: 1 }]}
//                     onChangeText={(text) => {
//                         if (onChangeText)
//                             onChangeText(text);
//                         setFieldValue(name, text);
//                     }}
//                     step={step}
//                     placeholder={Utils.I18n.t(placeholder)}
//                     keyboardType={type === 'number' ? 'numeric' : 'default'}
//                     secureTextEntry={type === 'password' && !showPassword} // Toggle secureTextEntry based on showPassword state
//                     {...rest}
//                 />
//                 {type === 'password' && (
//                     <TouchableOpacity onPress={togglePasswordVisibility} style={{marginEnd:10}}>
//                         {showPassword ? <Config.Images.HIDEPASSWORD width={15} height={15} /> : <Config.Images.SHOWPASSWORD width={15} height={15} />}
//                     </TouchableOpacity>
//                 )}
//             </View>
//             {renderError()}
//         </View>
//     );
// };

// export default React.memo(Input);

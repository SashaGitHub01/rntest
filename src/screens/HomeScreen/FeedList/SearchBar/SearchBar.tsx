import CustomButton from "@src/components/CustomButton/CustomButton";
import CustomInput from "@src/components/CustomInput/CustomInput";
import { theme } from "@src/styles/theme";
import React, { PropsWithChildren, ReactNode, useState } from "react";
import { Controller, Control } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { IFormValues } from "../../types/HomeScreen.types";

interface SearchBarProps {
  onSubmit: () => void;
  control: Control<IFormValues>;
}

const SearchBar: React.FC<PropsWithChildren<SearchBarProps>> = ({
  onSubmit,
  control,
}) => {
  return (
    <View style={styles.filters}>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput
            placeholder="Search"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="search"
      />
      <CustomButton style={styles.btn} onPress={onSubmit}>
        SEARCH
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  filters: {
    marginBottom: theme.space.md,
  },

  btn: {
    marginTop: theme.space.sm
  }
})

export default SearchBar;

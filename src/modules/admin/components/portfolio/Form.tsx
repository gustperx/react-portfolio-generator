import { FC } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PortfolioAttributes, portfolioValidationRules } from "../../models";
import { Input, Textarea, Checkbox } from "../ui";
import { useEffect } from "react";

interface Props {
  handleForm: (data: PortfolioAttributes) => void;
  formValues?: PortfolioAttributes;
}

export const Form: FC<Props> = ({ handleForm, formValues }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PortfolioAttributes>({
    resolver: yupResolver(portfolioValidationRules),
    defaultValues: formValues,
  });

  useEffect(() => {
    reset(formValues);
  }, [formValues]);

  const onSubmit: SubmitHandler<PortfolioAttributes> = (data) => {
    handleForm(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row">
        <Controller
          name="title"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Title"
              type="text"
              placeholder="My project"
              handleChange={onChange}
              inputValue={value}
              activeError={errors.title}
            />
          )}
        />
        <div className="divider divider-horizontal"></div>
        <Controller
          name="slug"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Slug"
              type="text"
              placeholder="my-project-abc"
              handleChange={onChange}
              inputValue={value}
              activeError={errors.slug}
            />
          )}
        />
      </div>
      <div className="flex">
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Textarea
              label="Description"
              placeholder="Bio"
              handleChange={onChange}
              inputValue={value}
              activeError={errors.description}
            />
          )}
        />
      </div>
      <div className="flex">
        <Controller
          name="visible"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              label="Is visible ?"
              handleChange={onChange}
              inputValue={value}
              activeError={errors.visible}
            />
          )}
        />
      </div>
      <div className="flex flex-row-reverse justify-between">
        <button className="btn btn-outline btn-info btn-wide">Save</button>
      </div>
    </form>
  );
};

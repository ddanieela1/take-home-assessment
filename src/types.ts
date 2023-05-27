import React from 'react'

export type Question = {
  id: number;
  title: string;
  description: string;
  type: string;
  modals?: {
    [key: string]: string;
  };
  choices?: string[];
  choice2: string;
};

export interface QuestionProps {
  question: Question;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface FieldProps {
  name: string;
  initialValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FieldDefaultProps = {
  initialValue: '',
}

export type IBeer = {
id: number,
name: string,
tagline: string,
description: string,
}

export type HomeProps = {
    data: IBeer[] | null;
  };
  
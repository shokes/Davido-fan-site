import Link from 'next/link';

type Props = {
  id: number;
  title: string;
  desc: string;
  website: string;
  github: string;
  stack: string[];
  role: string;
  year: number;
  para1: string;
  para2: string;
  para3: string;
};

const Project = ({ id, title, desc, website, github }: Props) => {
  return (
    <section>
      <Link href={`${id}`}>
        <div>{title}</div>
      </Link>
    </section>
  );
};

export default Project;

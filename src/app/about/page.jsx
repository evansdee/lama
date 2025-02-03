"use client";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 100px;

  .content {

    h4{
      color: var(--btn);
    }
    
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;

    .boxes{
      display: flex;
      justify-content: space-between;
h3{
  color: var(--btn);
}

      p{
        font-size: .8em;
      }
    }
  }
  .img {
    position: relative;
    flex: 1;
  }
`;

export default function AboutPage() {
  return (
    <>
      <Container>
        <div className="content">
          <h4>About Agency</h4>
          <h1>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            possimus fugit quae sint, non optio neque nulla? Perspiciatis
            aliquam, ipsa odio, sed facilis dolorum blanditiis maiores modi
            ipsum, cupiditate nemo.
          </p>
          <div className="boxes">
          {Array.from({ length: 3 }, (_, i) => i + 1).map((ele) => (
            <div className="box">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
          ))}
        </div>
        </div>
        <div className="img">
          <Image src="/about.png" alt="" width={400} height={400} />
        </div>
        
      </Container>
    </>
  );
}

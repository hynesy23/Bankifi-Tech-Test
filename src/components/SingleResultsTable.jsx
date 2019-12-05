import React from "react";
import image from "../marvel-image.jpeg";

export default function CharacterResultsTable({ result }) {
  if (result) {
    return (
      <>
        {result.thumbnail.path ? (
          <img
            src={`${result.thumbnail.path}/landscape_incredible.jpg`}
            alt=""
            className="gen_image"
          />
        ) : (
          <>
            <a
              title={`No image available for ${result.name}. Here's a nice generic Marvel pic instead`}
            >
              <img src={image} className="gen_image" alt="Marvel logo" />
            </a>
            )
          </>
        )}
        <h2>{result.name}</h2>
        <table>
          <thead>
            <tr>
              <td>{result.name.toUpperCase()}'S BIOGRAPHY: </td>
              {result.description ? (
                <td>{result.description}</td>
              ) : (
                <td>
                  No bio available (I know! {result.name} doesn't have a bio!
                  crazy, right?)
                </td>
              )}
            </tr>
            <tr>
              {result.firstName ? (
                <td>Popular Comics {result.name} has Contributed to:</td>
              ) : (
                <td>Popular Comics {result.name} has Appeared in:</td>
              )}
              <td>
                {result.comics.items.map(item => {
                  return <p key={item.name}>{item.name}</p>;
                })}
              </td>
            </tr>
            <tr>
              {result.firstName ? (
                <td>Popular Events {result.name} has Contributed to:</td>
              ) : (
                <td>Popular Events {result.name} has appeared in:</td>
              )}
              <td>
                {result.events.items.map(item => {
                  return <p key={item.name}>{item.name}</p>;
                })}
              </td>
            </tr>
            <tr>
              {result.firstName ? (
                <td>Popular Stories {result.name} has Contributed to:</td>
              ) : (
                <td>Popular Stories {result.name} has appareared in:</td>
              )}
              <td>
                {result.stories.items.map(item => {
                  return <p key={item.name}>{item.name}</p>;
                })}
              </td>
            </tr>
          </thead>
        </table>
      </>
    );
  }
}

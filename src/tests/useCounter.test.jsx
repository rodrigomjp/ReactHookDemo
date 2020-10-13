import React from "react";
import { shallow } from "enzyme";
import { useCounter } from "../hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

//para html
describe("Pruebas en <useCounter/>", () => {
  test("debe mostrase correctamente", () => {
    const wrapper = shallow(<useCounter></useCounter>);
    expect(wrapper).toMatchSnapshot();
  });
});

//para hook
describe("Pruebas en <useCounter/>", () => {
  test("debe mostrase correctamente", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe("function");
  });
});

describe("Pruebas en <useCounter/>", () => {
  test("debe incrmentar en 1 valor actual", () => {
    const { result } = renderHook(() => useCounter(1));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(2);
  });
});

describe("Pruebas en <useCounter/>", () => {
  test("debe establecer el valor en 1", () => {
    const { result } = renderHook(() => useCounter(1));
    const { increment, reset } = result.current;
    act(() => {
      increment();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(1);
  });
});

import { renderHook, act } from "@testing-library/react-hooks";

import useLocalStorage from "../../../utils/hooks/useLocalStorage";

describe("useLocalStorage", () => {
  it("sets initial state to desired value", () => {
    const { result } = renderHook(() => useLocalStorage("test", "testValue"));
    const [ value, ] = result.current;

    expect(value).toBe("testValue");
  });

  it("sets a new desired value", () => {
    const { result } = renderHook(() => useLocalStorage("test", "testValue"));
    const [ , setValue ] = result.current;

    act(() => {
        setValue("newValue");
    });
    
    const [ value, ] = result.current;

    expect(value).toBe("newValue");
  });
});

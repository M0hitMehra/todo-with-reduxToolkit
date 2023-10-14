import { createSlice } from "@reduxjs/toolkit";

const screenSize = () => {
  const userAgent = navigator.userAgent;
  const screenWidth = window.innerWidth;

  // Check user agent for common mobile and tablet keywords
  const isMobileDevice =
    /Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  // Check screen width for tablet-sized screens
  const isTabletDevice = screenWidth < 1024;

  const IsMobile = isMobileDevice;
  const IsTablet = isTabletDevice;
  const small = isMobileDevice && isTabletDevice;
  return small;
};

const initialState = {
  small: screenSize(),
};

const screenSizeSlice = createSlice({
  name: "small",
  initialState,
  reducers: {},
});

export const { small } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;

import apiClient from "./index";

// 로그인 응답 타입
export interface LoginResponse {
  access_token: string;
}

// 로그인
export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  console.log(`${username} ${password}`);
  const response = await apiClient.post<LoginResponse>(
    "/auth/authenticate",
    {
      userId: username.toString(),
      upassword: password.toString(),
    },
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  );
  console.log('login');
  console.log(response);
  return response.data;
};

// 회원가입 요청 타입
export interface RegisterRequest {
  username: string;
  userpassword: string;
  userId: string;
  email: string
}

// 회원가입
export const register = async (data: RegisterRequest): Promise<void> => {
  console.log(
    `${data.username} ${data.userpassword} ${data.userId} ${data.email}`
  );
  await apiClient.post("/customer/signup", data);
};

// 사용자 정보 타입
export interface UserInfo {
  username: string;
  userpassword: string;
  userId: string;
  email: string
}

// 사용자 정보 조회
export const getUserInfo = async (): Promise<UserInfo> => {
  const response = await apiClient.get<UserInfo>("/user/profile");
  return response.data;
};
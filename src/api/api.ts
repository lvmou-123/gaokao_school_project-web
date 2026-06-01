/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** 统一响应结果 */
export interface ResultVoid {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 响应数据 */
  data?: object;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 统一响应结果 */
export interface ResultMapStringString {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 响应数据 */
  data?: Record<string, string>;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 更新用户成绩请求 */
export interface UserScoreRequest {
  /**
   * 高考总分
   * @format int32
   * @example 600
   */
  totalScore?: number;
  /**
   * 全省排名
   * @format int32
   * @example 15000
   */
  rankNum?: number;
  /**
   * 考试类型（物理类/历史类）
   * @example "物理类"
   */
  examType?: string;
  /**
   * 所在省份
   * @example "河南"
   */
  province?: string;
  /**
   * 毕业年份
   * @format int32
   * @example 2025
   */
  graduationYear?: number;
}

/** 统一响应结果 */
export interface ResultUserResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 用户信息响应 */
  data?: UserResponse;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 用户信息响应 */
export interface UserResponse {
  /**
   * 用户ID
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 用户名
   * @example "zhangsan"
   */
  username?: string;
  /**
   * 真实姓名
   * @example "张三"
   */
  realName?: string;
  /**
   * 手机号
   * @example "13800138000"
   */
  phone?: string;
  /**
   * 所在省份
   * @example "河南"
   */
  province?: string;
  /**
   * 考试类型（物理类/历史类）
   * @example "物理类"
   */
  examType?: string;
  /**
   * 高考总分
   * @format int32
   * @example 600
   */
  totalScore?: number;
  /**
   * 全省排名
   * @format int32
   * @example 15000
   */
  rankNum?: number;
}

/** 志愿信息响应 */
export interface ApplicationResponse {
  /**
   * 志愿ID
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 用户ID
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * 院校ID
   * @format int64
   * @example 1
   */
  schoolId?: number;
  /**
   * 院校名称
   * @example "郑州大学"
   */
  schoolName?: string;
  /**
   * 专业ID
   * @format int64
   * @example 1
   */
  majorId?: number;
  /**
   * 专业名称
   * @example "计算机科学与技术"
   */
  majorName?: string;
  /**
   * 志愿优先级（1-10）
   * @format int32
   * @example 1
   */
  priority?: number;
  /**
   * 状态：draft-草稿 / submitted-已提交 / admitted-已录取
   * @example "draft"
   */
  status?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
}

/** 统一响应结果 */
export interface ResultApplicationResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 志愿信息响应 */
  data?: ApplicationResponse;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 用户注册请求（用户名密码方式） */
export interface UserRequest {
  /**
   * 用户名
   * @example "zhangsan"
   */
  username: string;
  /**
   * 密码
   * @example "mypassword123"
   */
  password: string;
  /**
   * 真实姓名
   * @example "张三"
   */
  realName?: string;
  /**
   * 手机号
   * @example "13800138000"
   */
  phone?: string;
  /**
   * 所在省份
   * @example "河南"
   */
  province?: string;
  /**
   * 考试类型（物理类/历史类）
   * @example "物理类"
   */
  examType?: string;
  /**
   * 毕业年份
   * @format int32
   * @example 2025
   */
  graduationYear?: number;
  /**
   * 高考总分
   * @format int32
   * @example 600
   */
  totalScore?: number;
  /**
   * 全省排名
   * @format int32
   * @example 15000
   */
  rankNum?: number;
}

/** 新增院校请求 */
export interface SchoolRequest {
  /**
   * 院校名称
   * @example "郑州大学"
   */
  name: string;
  /**
   * 院校代码
   * @example "10459"
   */
  code?: string;
  /**
   * 所在省份
   * @example "河南"
   */
  province?: string;
  /**
   * 所在城市
   * @example "郑州"
   */
  city?: string;
  /** 院校标签（如：985、211、双一流） */
  tags?: string[];
  /**
   * 院校类别
   * @example "综合"
   */
  category?: string;
  /** 院校简介 */
  description?: string;
}

/** 专业简要信息 */
export interface MajorBrief {
  /**
   * 专业ID
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 专业名称
   * @example "计算机科学与技术"
   */
  name?: string;
}

/** 统一响应结果 */
export interface ResultSchoolResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 院校信息响应 */
  data?: SchoolResponse;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 院校信息响应 */
export interface SchoolResponse {
  /**
   * 院校ID
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 院校名称
   * @example "郑州大学"
   */
  name?: string;
  /**
   * 院校代码
   * @example "10459"
   */
  code?: string;
  /**
   * 所在省份
   * @example "河南"
   */
  province?: string;
  /**
   * 所在城市
   * @example "郑州"
   */
  city?: string;
  /** 院校标签列表 */
  tags?: string[];
  /**
   * 院校类别
   * @example "综合"
   */
  category?: string;
  /** 院校简介 */
  description?: string;
  /** Logo URL */
  logo?: string;
  /** 官网地址 */
  website?: string;
  /** 开设专业列表 */
  majors?: MajorBrief[];
}

/** 智能推荐请求 */
export interface RecommendRequest {
  /**
   * 用户ID
   * @format int64
   * @example 1
   */
  userId: number;
  /**
   * 高考总分
   * @format int32
   * @example 600
   */
  score?: number;
  /**
   * 全省排名
   * @format int32
   * @example 15000
   */
  rankNum?: number;
  /**
   * 所在省份
   * @example "河南"
   */
  province?: string;
  /** 偏好标签（如：理工、综合、医药等） */
  preferences?: string[];
}

/** 推荐结果响应 */
export interface RecommendResponse {
  /**
   * 推荐记录ID
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 院校ID
   * @format int64
   * @example 1
   */
  schoolId?: number;
  /**
   * 院校名称
   * @example "郑州大学"
   */
  schoolName?: string;
  /**
   * 专业ID
   * @format int64
   * @example 1
   */
  majorId?: number;
  /**
   * 专业名称
   * @example "计算机科学与技术"
   */
  majorName?: string;
  /**
   * 录取概率（冲刺/稳妥/保底）
   * @example "冲刺"
   */
  probability?: string;
  /**
   * 推荐理由
   * @example "该院校往年在河南录取位次约为12000名"
   */
  reason?: string;
}

/** 统一响应结果 */
export interface ResultListRecommendResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 响应数据 */
  data?: RecommendResponse[];
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 新增专业请求 */
export interface MajorRequest {
  /**
   * 专业名称
   * @example "计算机科学与技术"
   */
  name: string;
  /**
   * 专业代码
   * @example "080901"
   */
  code?: string;
  /**
   * 学科门类
   * @example "工学"
   */
  category?: string;
  /** 专业描述 */
  description?: string;
  /**
   * 所属院校ID
   * @format int64
   * @example 1
   */
  schoolId: number;
  /**
   * 学制
   * @example "四年"
   */
  duration?: string;
  /**
   * 授予学位
   * @example "工学学士"
   */
  degree?: string;
  /**
   * 性别比例
   * @example "男:女 7:3"
   */
  genderRatio?: string;
  /**
   * 平均薪资
   * @example "¥12,000/月"
   */
  avgSalary?: string;
}

/** 专业信息响应 */
export interface MajorResponse {
  /**
   * 专业ID
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 专业名称
   * @example "计算机科学与技术"
   */
  name?: string;
  /**
   * 专业代码
   * @example "080901"
   */
  code?: string;
  /**
   * 学科门类
   * @example "工学"
   */
  category?: string;
  /** 专业描述 */
  description?: string;
  /** 开设院校列表 */
  schools?: SchoolBrief[];
  /**
   * 学制
   * @example "四年"
   */
  duration?: string;
  /**
   * 授予学位
   * @example "工学学士"
   */
  degree?: string;
  /**
   * 性别比例
   * @example "男:女 7:3"
   */
  genderRatio?: string;
  /**
   * 平均薪资
   * @example "¥12,000/月"
   */
  avgSalary?: string;
}

/** 统一响应结果 */
export interface ResultMajorResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 专业信息响应 */
  data?: MajorResponse;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 院校简要信息 */
export interface SchoolBrief {
  /**
   * 院校ID
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 院校名称
   * @example "郑州大学"
   */
  name?: string;
}

/** 发送短信验证码请求 */
export interface SendSmsRequest {
  /**
   * 手机号
   * @pattern ^1[3-9]\d{9}$
   * @example "13800138000"
   */
  phone: string;
}

/** 手机号注册请求 */
export interface RegisterRequest {
  /**
   * 手机号
   * @pattern ^1[3-9]\d{9}$
   * @example "13800138000"
   */
  phone: string;
  /**
   * 短信验证码
   * @example "123456"
   */
  code: string;
  /**
   * 密码（可选，不设置则使用验证码登录）
   * @example "mypassword"
   */
  password?: string;
  /**
   * 真实姓名
   * @example "张三"
   */
  realName?: string;
}

/** 认证响应（JWT令牌 + 用户基本信息） */
export interface AuthResponse {
  /**
   * JWT访问令牌
   * @example "eyJhbGciOiJIUzI1NiJ9.xxx"
   */
  token?: string;
  /**
   * 用户ID
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * 用户昵称
   * @example "小明"
   */
  nickname?: string;
  /**
   * 头像URL
   * @example "https://example.com/avatar.png"
   */
  avatar?: string;
  /**
   * 手机号
   * @example "13800138000"
   */
  phone?: string;
}

/** 统一响应结果 */
export interface ResultAuthResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 认证响应（JWT令牌 + 用户基本信息） */
  data?: AuthResponse;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 微信小程序登录请求 */
export interface WeChatLoginRequest {
  /**
   * 微信code（临时登录凭证）
   * @example "071ZkB0w3iQ52O2hPx2w3qEo1q3ZkB0u"
   */
  code: string;
  /**
   * 微信用户昵称
   * @example "小明"
   */
  nickname?: string;
  /**
   * 微信头像URL
   * @example "https://thirdwx.qlogo.cn/xxx"
   */
  avatar?: string;
}

/** 手机号登录请求 */
export interface PhoneLoginRequest {
  /**
   * 手机号
   * @pattern ^1[3-9]\d{9}$
   * @example "13800138000"
   */
  phone: string;
  /**
   * 短信验证码
   * @example "123456"
   */
  code: string;
}

/** 添加志愿请求 */
export interface ApplicationRequest {
  /**
   * 用户ID
   * @format int64
   * @example 1
   */
  userId: number;
  /**
   * 院校ID
   * @format int64
   * @example 1
   */
  schoolId: number;
  /**
   * 专业ID（可选）
   * @format int64
   * @example 1
   */
  majorId?: number;
  /**
   * 志愿优先级（1-10）
   * @format int32
   * @example 1
   */
  priority: number;
}

/** AI 对话请求 */
export interface ChatRequest {
  /**
   * 用户咨询的问题
   * @minLength 0
   * @maxLength 2000
   * @example "河南理科600分能报哪些大学？"
   */
  message: string;
  /** 用户ID（可选，携带后可获取个性化建议） */
  userId?: string;
  /**
   * 高考总分
   * @format int32
   * @example 600
   */
  score?: number;
  /**
   * 全省排名
   * @format int32
   * @example 15000
   */
  rankNum?: number;
  /**
   * 所在省份
   * @example "河南"
   */
  province?: string;
}

/** AI 对话响应 */
export interface ChatResponse {
  /**
   * AI回复内容
   * @example "根据您的分数和排名，建议冲刺郑州大学..."
   */
  reply?: string;
  /**
   * AI模型名称
   * @example "glm-4.5"
   */
  model?: string;
}

/** 统一响应结果 */
export interface ResultChatResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** AI 对话响应 */
  data?: ChatResponse;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 分页结果 */
export interface PageResultSchoolResponse {
  /** 数据列表 */
  list?: SchoolResponse[];
  /**
   * 总记录数
   * @format int64
   * @example 100
   */
  total?: number;
  /**
   * 当前页码（从0开始）
   * @format int32
   * @example 0
   */
  page?: number;
  /**
   * 每页大小
   * @format int32
   * @example 20
   */
  size?: number;
}

/** 统一响应结果 */
export interface ResultPageResultSchoolResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 分页结果 */
  data?: PageResultSchoolResponse;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 统一响应结果 */
export interface ResultObject {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 响应数据 */
  data?: object;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 收藏院校信息 */
export interface FavoriteSchoolResponse {
  /**
   * 收藏记录ID
   * @format int64
   */
  favoriteId?: number;
  /**
   * 院校ID
   * @format int64
   */
  schoolId?: number;
  /** 院校名称 */
  schoolName?: string;
  /** 所在省份 */
  province?: string;
  /** 所在城市 */
  city?: string;
  /** 院校标签列表 */
  tags?: string[];
  /**
   * 院校类别
   * @example "综合"
   */
  category?: string;
  /** Logo URL */
  logo?: string;
  /** 收藏时间 */
  createdAt?: string;
}

/** 分页结果 */
export interface PageResultFavoriteSchoolResponse {
  /** 数据列表 */
  list?: FavoriteSchoolResponse[];
  /**
   * 总记录数
   * @format int64
   * @example 100
   */
  total?: number;
  /**
   * 当前页码（从0开始）
   * @format int32
   * @example 0
   */
  page?: number;
  /**
   * 每页大小
   * @format int32
   * @example 20
   */
  size?: number;
}

/** 统一响应结果 */
export interface ResultPageResultFavoriteSchoolResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 分页结果 */
  data?: PageResultFavoriteSchoolResponse;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 收藏状态 */
export interface FavoriteStatusResponse {
  /** 是否已收藏 */
  favorited?: boolean;
  /**
   * 收藏记录ID
   * @format int64
   */
  favoriteId?: number;
}

/** 统一响应结果 */
export interface ResultFavoriteStatusResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 收藏状态 */
  data?: FavoriteStatusResponse;
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

/** 统一响应结果 */
export interface ResultListApplicationResponse {
  /**
   * 状态码（200=成功）
   * @format int32
   * @example 200
   */
  code?: number;
  /**
   * 提示信息
   * @example "success"
   */
  message?: string;
  /** 响应数据 */
  data?: ApplicationResponse[];
  /**
   * 时间戳（毫秒）
   * @format int64
   */
  timestamp?: number;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "http://localhost:8080",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title 高考志愿填报助手 API
 * @version 1.0.0
 * @baseUrl http://localhost:8080
 * @contact 开发团队
 *
 * 高考志愿填报小程序后端接口文档，支持院校查询、专业查询、AI 智能推荐等功能
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description 更新用户的高考成绩、排名、考试类型等信息
     *
     * @tags 用户管理
     * @name UpdateScores
     * @summary 更新用户成绩
     * @request PUT:/api/users/{id}/scores
     * @secure
     */
    updateScores: (
      id: number,
      data: UserScoreRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        ResultUserResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/users/${id}/scores`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 更新指定志愿的状态（draft / submitted / admitted）
     *
     * @tags 志愿管理
     * @name UpdateStatus
     * @summary 更新志愿状态
     * @request PUT:/api/applications/{id}/status
     * @secure
     */
    updateStatus: (
      id: number,
      query: {
        /** 新状态：draft（草稿）、submitted（已提交）、admitted（已录取） */
        status: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResultApplicationResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/applications/${id}/status`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 用户名密码注册（非微信/短信注册方式）
     *
     * @tags 用户管理
     * @name Register
     * @summary 用户注册
     * @request POST:/api/users/register
     * @secure
     */
    register: (data: UserRequest, params: RequestParams = {}) =>
      this.request<
        ResultUserResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/users/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 根据关键词、省份、标签等条件分页搜索院校
     *
     * @tags 院校管理
     * @name Search
     * @summary 搜索院校
     * @request GET:/api/schools
     * @secure
     */
    search: (
      query?: {
        /** 搜索关键词（匹配院校名称） */
        keyword?: string;
        /** 所在省份 */
        province?: string;
        /** 标签（如：985/211/双一流/普通本科/普通专科） */
        tag?: string;
        /**
         * 页码（从0开始）
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * 每页条数
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResultPageResultSchoolResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/schools`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 添加一所新的高等院校信息（管理端接口）
     *
     * @tags 院校管理
     * @name Create
     * @summary 新增院校
     * @request POST:/api/schools
     * @secure
     */
    create: (data: SchoolRequest, params: RequestParams = {}) =>
      this.request<
        ResultSchoolResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/schools`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 根据用户成绩、排名、省份和偏好生成冲刺/稳妥/保底三个梯度的院校推荐
     *
     * @tags 院校推荐
     * @name Recommend
     * @summary 智能推荐
     * @request POST:/api/recommendations
     * @secure
     */
    recommend: (data: RecommendRequest, params: RequestParams = {}) =>
      this.request<
        ResultListRecommendResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/recommendations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 根据关键词、学科门类等条件分页搜索专业，或查询某院校下的全部专业
     *
     * @tags 专业管理
     * @name List
     * @summary 搜索专业
     * @request GET:/api/majors
     * @secure
     */
    list: (
      query?: {
        /**
         * 所属院校ID（指定后查询该校全部专业）
         * @format int64
         */
        schoolId?: number;
        /** 搜索关键词（匹配专业名称） */
        keyword?: string;
        /** 学科门类（如：工学、理学、医学） */
        category?: string;
        /**
         * 页码（从0开始）
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * 每页条数
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResultObject,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/majors`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 添加一个新专业（管理端接口）
     *
     * @tags 专业管理
     * @name Create1
     * @summary 新增专业
     * @request POST:/api/majors
     * @secure
     */
    create1: (data: MajorRequest, params: RequestParams = {}) =>
      this.request<
        ResultMajorResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/majors`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 收藏指定的院校
     *
     * @tags 院校收藏
     * @name AddFavorite
     * @summary 收藏院校
     * @request POST:/api/favorites/schools/{schoolId}
     * @secure
     */
    addFavorite: (schoolId: number, params: RequestParams = {}) =>
      this.request<
        ResultVoid,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/favorites/schools/${schoolId}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description 取消收藏指定的院校
     *
     * @tags 院校收藏
     * @name RemoveFavorite
     * @summary 取消收藏
     * @request DELETE:/api/favorites/schools/{schoolId}
     * @secure
     */
    removeFavorite: (schoolId: number, params: RequestParams = {}) =>
      this.request<
        ResultVoid,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/favorites/schools/${schoolId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 向指定手机号发送6位数字验证码，验证码有效期为5分钟
     *
     * @tags 认证管理
     * @name SendSms
     * @summary 发送短信验证码
     * @request POST:/api/auth/sms
     * @secure
     */
    sendSms: (data: SendSmsRequest, params: RequestParams = {}) =>
      this.request<
        ResultVoid,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/auth/sms`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 通过手机号+验证码注册新用户，自动返回JWT令牌
     *
     * @tags 认证管理
     * @name Register1
     * @summary 手机号注册
     * @request POST:/api/auth/register
     * @secure
     */
    register1: (data: RegisterRequest, params: RequestParams = {}) =>
      this.request<
        ResultAuthResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/auth/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 通过微信code换取openId，新用户自动注册，返回JWT令牌
     *
     * @tags 认证管理
     * @name LoginByWeChat
     * @summary 微信小程序登录
     * @request POST:/api/auth/login/wechat
     * @secure
     */
    loginByWeChat: (data: WeChatLoginRequest, params: RequestParams = {}) =>
      this.request<
        ResultAuthResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/auth/login/wechat`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 通过手机号+验证码快速登录，新用户自动注册
     *
     * @tags 认证管理
     * @name LoginByPhone
     * @summary 手机号登录
     * @request POST:/api/auth/login/phone
     * @secure
     */
    loginByPhone: (data: PhoneLoginRequest, params: RequestParams = {}) =>
      this.request<
        ResultAuthResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/auth/login/phone`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 为用户添加一条志愿记录（含院校、专业和优先级）
     *
     * @tags 志愿管理
     * @name Create2
     * @summary 添加志愿
     * @request POST:/api/applications
     * @secure
     */
    create2: (data: ApplicationRequest, params: RequestParams = {}) =>
      this.request<
        ResultApplicationResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/applications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 向AI助手发送志愿填报相关问题，可附带用户成绩信息获取个性化建议
     *
     * @tags AI 助手
     * @name Chat
     * @summary AI 对话
     * @request POST:/api/ai/chat
     * @secure
     */
    chat: (data: ChatRequest, params: RequestParams = {}) =>
      this.request<
        ResultChatResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/ai/chat`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 根据用户ID获取用户基本信息
     *
     * @tags 用户管理
     * @name GetById
     * @summary 查询用户信息
     * @request GET:/api/users/{id}
     * @secure
     */
    getById: (id: number, params: RequestParams = {}) =>
      this.request<
        ResultUserResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/users/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description 根据院校ID获取详细信息，包含标签列表
     *
     * @tags 院校管理
     * @name GetById1
     * @summary 查询院校详情
     * @request GET:/api/schools/{id}
     * @secure
     */
    getById1: (id: number, params: RequestParams = {}) =>
      this.request<
        ResultSchoolResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/schools/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description 根据专业ID查询开设该专业的院校列表，支持分页（按专业名称匹配）
     *
     * @tags 院校管理
     * @name GetSchoolsByMajor
     * @summary 根据专业查询开设院校
     * @request GET:/api/schools/by-major/{majorId}
     * @secure
     */
    getSchoolsByMajor: (
      majorId: number,
      query?: {
        /**
         * 页码（从0开始）
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * 每页条数
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResultPageResultSchoolResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/schools/by-major/${majorId}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 查询指定用户的推荐历史记录
     *
     * @tags 院校推荐
     * @name History
     * @summary 推荐历史
     * @request GET:/api/recommendations/history/{userId}
     * @secure
     */
    history: (userId: number, params: RequestParams = {}) =>
      this.request<
        ResultListRecommendResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/recommendations/history/${userId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description 根据专业ID获取详细信息
     *
     * @tags 专业管理
     * @name GetById2
     * @summary 查询专业详情
     * @request GET:/api/majors/{id}
     * @secure
     */
    getById2: (id: number, params: RequestParams = {}) =>
      this.request<
        ResultMajorResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/majors/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description 分页获取当前用户的院校收藏列表
     *
     * @tags 院校收藏
     * @name ListFavorites
     * @summary 收藏列表
     * @request GET:/api/favorites/schools
     * @secure
     */
    listFavorites: (
      query?: {
        /**
         * 页码（从0开始）
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * 每页条数
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResultPageResultFavoriteSchoolResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/favorites/schools`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 检查当前用户是否已收藏指定的院校
     *
     * @tags 院校收藏
     * @name CheckFavorite
     * @summary 检查收藏状态
     * @request GET:/api/favorites/schools/check/{schoolId}
     * @secure
     */
    checkFavorite: (schoolId: number, params: RequestParams = {}) =>
      this.request<
        ResultFavoriteStatusResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/favorites/schools/check/${schoolId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description 查询指定用户的所有志愿记录，按优先级排序
     *
     * @tags 志愿管理
     * @name ListByUser
     * @summary 查询用户志愿列表
     * @request GET:/api/applications/user/{userId}
     * @secure
     */
    listByUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        ResultListApplicationResponse,
        (ResultMapStringString | ResultVoid) | ResultVoid
      >({
        path: `/api/applications/user/${userId}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}

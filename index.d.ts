type MockRequest = Request | RequestInit;
type MockMatcherFunction = (url: string, opts: MockRequest) => boolean
type MockMatcher = string | RegExp | Function | MockMatcherFunction;

interface MockResponseObject {
    body?: string | Object;
    status?: number;
    headers?: {[key: string]: string};
    throws?: Object;
    sendAsJson?: boolean;
}

type MockResponse = Response | Promise<Response>
                    | number | Promise<number>
                    | string | Promise<string>
                    | Object | Promise<Object>
                    | MockResponseObject | Promise<MockResponseObject>;

type MockResponseFunction = (url: string, opts: MockRequest) => MockResponse;

interface MockOptions {
    name?: string;
    method?: string;
    matcher?: MockMatcher;
    response?: MockResponse | MockResponseFunction;
}

type MockCall = [string, MockRequest];

interface MatchedRoutes {
    matched: Array<MockCall>;
    unmatched: Array<MockCall>;
}

interface FetchMockStatic {
    mock(matcher: MockMatcher, response: MockResponse | MockResponseFunction): this;
    mock(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options: MockOptions): this;
    mock(options: MockOptions): this;
    restore(): this;
    reset(): this;

    calls(): MatchedRoutes;
    calls(matcherName?: string): Array<MockCall>;
    called(): boolean;
    called(matcherName?: string): boolean;
    lastCall(): MockCall;
    lastCall(matcherName?: string): MockCall;
    lastUrl(): string;
    lastUrl(matcherName?: string): string;
    lastOptions(): MockRequest;
    lastOptions(matcherName?: string): MockRequest;

    configure(opts: Object): void;
}

declare var fetchMock: FetchMockStatic;
export = fetchMock;

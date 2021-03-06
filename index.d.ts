type MockMatcherFunction = (url: string, opts: Object) => boolean;
type MockMatcher = string | RegExp | Function | MockMatcherFunction;

type MockResponse = number | string | Object | MockResponseObject;

type MockResponseFunction = (url: string, opts: Object) => MockResponse;

interface MockResponseObject {
    body?: string | Object;
    status?: number;
    headers?: {[key: string]: any};
    throws?: boolean;
    sendAsJson?: boolean;
}

interface MockCallOptions {
    [key: string]: any;
}

type MockCall = [string, RequestInit];

interface MatchedRoutes {
    matched: Array<MockCall>;
    unmatched: Array<MockCall>;
}

interface FetchMockStatic {
    useNonGlobalFetch(): void;
    mock(matcher: MockMatcher, response?: MockResponse | MockResponseFunction): this;
    mock(matcher: MockMatcher, method?: string, response?: MockResponse | MockMatcherFunction): this;
    restore(): this;
    reset(): this;
    reMock(matcher: MockMatcher, response?: MockResponse | MockResponseFunction): this;
    reMock(matcher: MockMatcher, method?: string, response?: MockResponse | MockMatcherFunction): this;

    calls(matcher?: string): Array<MockCall>
    calls(): MatchedRoutes;
    called(matcher?: string): boolean;
    lastCall(matcher?: string): MockCall;
    lastUrl(matcher?: string): string;
    lastOptions(matcher?: string): MockCallOptions;

}

declare var fetchMock: FetchMockStatic;
export = fetchMock;

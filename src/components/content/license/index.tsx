import React from 'react';

const License: React.FunctionComponent = () => (
    <div className="content" style={{ textAlign: 'start' }}>
        <h1 className="content-title mb-0" style={{ fontSize: '2.8rem' }}>
            License
        </h1>
        <p className="text-muted mt-0">Last updated: 20-01-2021</p>
        <div className="p-20 text-monospace bg-light bg-dark-dm rounded font-size-12">
            <p>MIT License</p>

            <p>Copyright &copy; 2021 Giorgi Beriashvili</p>

            <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
                associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction,
                including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
                and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
                subject to the following conditions:
            </p>

            <p>
                The above copyright notice and this permission notice shall be included in all copies or substantial
                portions of the Software.
            </p>

            <p>
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
                BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
                CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
        </div>
        <p>
            Please note, the copyright notice found in the files must <strong>also</strong> be included when the files
            are used.
        </p>
    </div>
);

export default License;
